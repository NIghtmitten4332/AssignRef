using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Domain.TestInstances
{
    public class TestInstanceGraded
    {
        public int TotalQuestions { get; set; }
        public DateTime EndTime { get; set; }
        public int Correct { get; set; }
        public decimal Grade { get; set; }
        public List<TestQuestionDetailed> Incorrect { get; set; }
    }
}
