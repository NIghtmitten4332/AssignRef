using Sabio.Models;
using Sabio.Models.Domain.TestInstances;
using Sabio.Models.Requests.TestInstances;
using System;

namespace Sabio.Services
{
    public interface ITestInstancesService
    {
        int Add(TestInstanceAddRequest model, int userId);
        Paged<BaseTestInstance> SelectAllInstances(int pageIndex, int pageSize);
        TestInstanceDetailed SelectByInstanceIdDetailed(int id);
        Paged<BaseTestInstance> SelectByTestId(int id, int pageIndex, int pageSize);
        Paged<BaseTestInstance> SelectByUserId(int userId, int pageIndex, int pageSize);
        void UpdateStatus(int id, int statusId);
        TestInstanceGraded Update(TestInstanceUpdateRequest model, int userId);
        Paged<TestInstanceAnswerCount> Search(int pageIndex, int pageSize, string query, DateTime startDate, DateTime endDate);
    }
}