using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Requests.TestInstances
{
    public class TestInstanceUpdateRequest : TestInstanceAddRequest, IModelIdentifier
    {
        [Required]
        [Range(0,int.MaxValue)]
        public int Id { get; set; }
    }
}
