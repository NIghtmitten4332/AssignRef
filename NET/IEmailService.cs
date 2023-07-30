using Sabio.Models.Domain.Conferences;
using Sabio.Models.Domain.Emails;
using Sabio.Models.Domain.Officials;
using Sabio.Models.Domain.TestInstances;
using Sabio.Models.Domain.Tests;
using Sabio.Models.Domain.Users;
using Sabio.Models.Requests.Conferences;
using Sabio.Models.Requests.TestInstances;
using Sabio.Models.Requests.Zoom;
using sib_api_v3_sdk.Model;
using System.Collections.Generic;

namespace Sabio.Services.Interfaces
{
    public interface IEmailService
    {
        void ReceiveEmailRequest(EmailInformation model);
        void SendGradeEmail(TestInstanceGraded model, string email);
        void SendPromotionEmail(Official model, string email);
        void ContactUsRequest(ContactUsRequest userInfo);
        void InviteToTeamRequest(EmailInformation model);
        void SendUserAuthEmail(string token, string email, string urlExtension, EmailType emailType, int userRole = 0);
        void AssignmentEmail(AssignmentEmail assignmentInfo);
        void SendMeetingLink(EmailZoomMeeting model);
        void SendTestInstanceLink(List<TestInstanceEmail> list);


    }
}