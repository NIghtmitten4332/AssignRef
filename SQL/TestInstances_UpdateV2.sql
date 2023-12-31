﻿USE [AssignRef]

	ALTER PROC [dbo].[TestInstances_UPDATEV2]
									 @TestId INT
									,@Userid INT
									,@StatusId INT = NULL
									,@BatchAnswers dbo.InstanceAnswers READONLY
									,@Id INT 


	AS

	/*
	DECLARE @Id INT = 2515
	DECLARE	
			 @TestId int = 10
			,@UserId int = 42
			,@StatusId int
			,@BatchAnswers dbo.InstanceAnswers 

		INSERT INTO
			@BatchAnswers
				(QuestionId
				,AnswerOptionId
				,Answer)
		VALUES
			(272, 8, '4')
		   ,(273, 50, 'US')
		   ,(321, 54, '50')

				EXECUTE	
			dbo.TestInstances_UpdateV2
				@TestId
				,@UserId
				,@StatusId
				,@BatchAnswers
				,@Id

	select *
from @BatchAnswers
	*/

	BEGIN

	UPDATE	[dbo].[TestInstances]
	SET     [TestId]		= @TestId
		   ,[UserId]		= @UserId
		   ,[StatusId]		= ISNULL(@StatusId, 1)
		WHERE Id			= @Id
			
	DELETE FROM [dbo].[TestAnswers]
	WHERE InstanceId		= @Id


	INSERT INTO [dbo].[TestAnswers]
			([InstanceId]
		    ,[QuestionId]
		    ,[AnswerOptionId]
			,[Answer])
	SELECT
			 @ID
			,QuestionId
			,AnswerOptionId
			,Answer
	FROM
			 @BatchAnswers


	DECLARE @GradeId INT	= @Id
	
	Select DISTINCT
			TotalQuestions  = Count(1) OVER()
			,[EndTime]		= GETUTCDATE()
			,[Correct]		= COUNT(SUM (CASE WHEN tqa.IsCorrect = 1 THEN 1 END)) OVER()
			,[Grade]		= CAST(COUNT(SUM (CASE WHEN tqa.IsCorrect = 1 THEN 1 END)) over() as decimal(7,2)) / CAST(Count(1) OVER() as decimal(7,2))* 100
			,[Incorrect]	= (
								SELECT TQ.Id
									  ,TQ.Question
					FROM dbo.TestAnswers as TA
					 INNER JOIN dbo.TestQuestionAnswerOptions as TQA on TQA.Id = TA.AnswerOptionId
					 INNER JOIN dbo.TestQuestions			  as TQ  on TQ.Id  = TA.QuestionId
					WHERE TA.InstanceId = @Id AND TQA.IsCorrect = 0
					FOR JSON AUTO
							)
	from dbo.TestQuestions				   as tq
		join dbo.TestQuestionAnswerOptions as tqa on tq.Id = tqa.QuestionId  
		join dbo.TestAnswers			   as ta on tqa.Id = ta.AnswerOptionId 
		join dbo.TestInstances			   as ti on ti.Id  = ta.InstanceId
	where ti.Id = @Id

	GROUP BY ti.Id	
			,tq.Question
			,tqa.IsCorrect
			
	END


