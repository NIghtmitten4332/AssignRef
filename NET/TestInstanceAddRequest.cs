using Sabio.Models.Domain.TestInstances;
using Sabio.Models.Requests.TestAnswers;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Sabio.Models.Requests.TestInstances
{
    public class TestInstanceAddRequest
    {
        [Required]
        [Range(0, int.MaxValue)]
        public int TestId { get; set; }
        public int? StatusId { get; set; }
        [Required]
        public List<BaseTestAnswerAddRequest> TestAnswers { get; set; }
        public List<TestQuestionDetailed> TotalQuestions { get; }
     
    }
}
