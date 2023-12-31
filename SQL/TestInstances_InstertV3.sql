﻿USE [AssignRef]

	ALTER PROC [dbo].[TestInstances_InsertV3]
									@TestId int
									,@UserId int
									,@StatusId int = NULL
									,@BatchAnswers dbo.InstanceAnswers READONLY
									,@Id int OUTPUT


	AS

	/*

	DECLARE	
			 @TestId int = 10
			,@UserId int = 42
			,@StatusId int
			,@Id int
			,@BatchAnswers dbo.InstanceAnswers 

		INSERT INTO
			@BatchAnswers
				(QuestionId
				,AnswerOptionId
				,Answer)
		VALUES
			(272,8,'4')
		   ,(273,51,'Spain')
		   ,(321,53,'32')

				EXECUTE	
			dbo.TestInstances_InsertV3
				@TestId
				,@UserId
				,@StatusId
				,@BatchAnswers
				,@Id OUTPUT

Select *
from dbo.testInstances
select *
from @BatchAnswers
	*/

	BEGIN


	INSERT INTO	
			[dbo].[TestInstances]
				([TestId]
				,[UserId]
				,[StatusId])
		VALUES
			(@TestId
			,@UserId
			,ISNULL(@StatusId, 1))


	DECLARE	@InstanceId int = SCOPE_IDENTITY()
	SET @Id = SCOPE_IDENTITY()


	INSERT INTO
		dbo.TestAnswers
			(InstanceId
			,QuestionId
			,AnswerOptionId
			,Answer)
			
	SELECT
			@InstanceId
			,QuestionId
			,AnswerOptionId
			,Answer
	FROM
			 @BatchAnswers

	--DECLARE  @newinstanceID INT = @InstanceId
	Select DISTINCT
			TotalQuestions  = Count(1) OVER()
			,[Correct]		= COUNT(SUM (CASE WHEN tqa.IsCorrect = 1 THEN 1 END)) OVER()
			,[Grade]		= CAST(COUNT(SUM (CASE WHEN tqa.IsCorrect = 1 THEN 1 END)) over() as decimal(7,2)) / CAST(Count(1) OVER() as decimal(7,2))* 100
			,[Incorrect]	= (
								SELECT TQ.Id
									  ,TQ.Question
					FROM dbo.TestAnswers as TA
					 INNER JOIN dbo.TestQuestionAnswerOptions as TQA on TQA.Id = TA.AnswerOptionId
					 INNER JOIN dbo.TestQuestions			  as TQ  on TQ.Id  = TA.QuestionId
					WHERE TA.InstanceId = @InstanceId AND TQA.IsCorrect = 0
					FOR JSON AUTO
							)
	from dbo.TestQuestions				   as tq
		join dbo.TestQuestionAnswerOptions as tqa on tq.Id = tqa.QuestionId  
		join dbo.TestAnswers			   as ta on tqa.Id = ta.AnswerOptionId 
		join dbo.TestInstances			   as ti on ti.Id  = ta.InstanceId
	where ti.Id = @InstanceId


	GROUP BY ti.Id	
			,tq.Question
			,tqa.IsCorrect
			
	

	END


