﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NuGet.Common;
using Sabio.Models;
using Sabio.Models.Domain;
using Sabio.Models.Domain.Emails;
using Sabio.Models.Domain.TestInstances;
using Sabio.Models.Domain.Users;
using Sabio.Models.Requests.TestInstances;
using Sabio.Models.Requests.Users;
using Sabio.Services;
using Sabio.Services.Interfaces;
using Sabio.Web.Controllers;
using Sabio.Web.Models.Responses;
using System;
using System.Threading.Tasks;
using static Google.Apis.Requests.BatchRequest;

namespace Sabio.Web.Api.Controllers
{
    [Route("api/tests/results")]
    [ApiController]
    public class TestInstancesApiController : BaseApiController
    {
        public IEmailService _emailService { get; set; }
        private ITestInstancesService _service = null;
        private IAuthenticationService<int> _authService = null;
        private IUserService _userService = null;

        public TestInstancesApiController(ITestInstancesService service, IAuthenticationService<int> authService, IEmailService emailService, IUserService userService, ILogger<TestInstancesApiController> logger) : base(logger)
        {
            _service = service;
            _authService = authService;
            _emailService = emailService;
            _userService = userService;
        }
        [HttpPut("{id:int}")]
        public ActionResult<ItemResponse<TestInstanceGraded>> Update(TestInstanceUpdateRequest model)
        {
            int code = 200;
            ObjectResult result = null;
            try
            {
                UserAuthData user = _userService.GetCurrentUser();
                TestInstanceGraded testGrade = _service.Update(model, user.Id);

                _emailService.SendGradeEmail(testGrade, user.Email);
                ItemResponse<TestInstanceGraded> response = new ItemResponse<TestInstanceGraded>() { Item = testGrade };

                result = StatusCode(code, response);
            }
            catch (Exception ex)
            {

                Logger.LogError(ex.ToString());
                ErrorResponse response = new ErrorResponse(ex.Message);

                result = StatusCode(500, response);
            }
            return StatusCode(code, result);
        }

        
        [HttpPost]
        public ActionResult<ItemResponse<int>> Add(TestInstanceAddRequest model)
        {
            ObjectResult result = null;

            try
            {
                UserAuthData user = _userService.GetCurrentUser();
                int id = _service.Add(model, user.Id);

               
                ItemResponse<int> response = new ItemResponse<int>() { Item = id };

                result = Created201(response);

            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                ErrorResponse response = new ErrorResponse(ex.Message);

                result = StatusCode(500, response);
            }

            return result;
        }

        [HttpGet("search")]
        public ActionResult<ItemResponse<Paged<TestInstanceAnswerCount>>> Search(int pageIndex, int pageSize, string query, DateTime startDate, DateTime endDate)
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                Paged<TestInstanceAnswerCount> pagedList = _service.Search(pageIndex, pageSize, query, startDate, endDate);
                if (pagedList == null)
                {
                    code = 404;
                    response = new ErrorResponse("Records Not Found");
                }
                else
                {
                    response = new ItemResponse<Paged<TestInstanceAnswerCount>>() { Item = pagedList };
                }
            }
            catch (Exception ex)
            {
                code = 500;
                Logger.LogError(ex.ToString());
                response = new ErrorResponse(ex.Message.ToString());
            }
            return StatusCode(code, response);
        }

        [HttpGet]
        public ActionResult<ItemResponse<Paged<BaseTestInstance>>> SelectAll(int pageIndex, int pageSize)
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                Paged<BaseTestInstance> pagedList = _service.SelectAllInstances(pageIndex, pageSize);
                if (pagedList == null)
                {
                    code = 404;
                    response = new ErrorResponse("Records Not Found");
                }
                else
                {
                    response = new ItemResponse<Paged<BaseTestInstance>>() { Item = pagedList };
                }
            }
            catch (Exception ex)
            {
                code = 500;
                Logger.LogError(ex.ToString());
                response = new ErrorResponse(ex.Message.ToString());
            }
            return StatusCode(code, response);
        }

        [HttpGet("{id:int}")]
        public ActionResult<ItemResponse<Paged<BaseTestInstance>>> SelectById(int id, int pageIndex, int pageSize)
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                Paged<BaseTestInstance> pagedList = _service.SelectByTestId(id, pageIndex, pageSize);
                if (pagedList == null)
                {
                    code = 404;
                    response = new ErrorResponse("Records Not Found");
                }
                else
                {
                    response = new ItemResponse<Paged<BaseTestInstance>>() { Item = pagedList };
                }
            }
            catch (Exception ex)
            {
                code = 500;
                Logger.LogError(ex.ToString());
                response = new ErrorResponse(ex.Message.ToString());
            }
            return StatusCode(code, response);
        }

        [HttpGet("user")]
        public ActionResult<ItemResponse<Paged<BaseTestInstance>>> SelectByUserId(int pageIndex, int pageSize)
        {
            int code = 200;
            BaseResponse response = null;
            int userId = _authService.GetCurrentUserId();

            try
            {
                Paged<BaseTestInstance> pagedList = _service.SelectByUserId(userId, pageIndex, pageSize);
                if (pagedList == null)
                {
                    code = 404;
                    response = new ErrorResponse("Records Not Found");
                }
                else
                {
                    response = new ItemResponse<Paged<BaseTestInstance>>() { Item = pagedList };
                }
            }
            catch (Exception ex)
            {
                code = 500;
                Logger.LogError(ex.ToString());
                response = new ErrorResponse(ex.Message.ToString());
            }
            return StatusCode(code, response);
        }

        [HttpGet("detailed/{id:int}")]
        public ActionResult<ItemResponse<TestInstanceDetailed>> SelectByIdDetailed(int id)
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                TestInstanceDetailed record = _service.SelectByInstanceIdDetailed(id);
                response = new ItemResponse<TestInstanceDetailed>() { Item = record };
            }
            catch (Exception ex)
            {
                code = 500;
                Logger.LogError(ex.ToString());
                response = new ErrorResponse(ex.Message.ToString());
            }

            return StatusCode(code, response);
        }

        [HttpDelete("{id:int}")]
        public ActionResult<SuccessResponse> SoftDelete(int id, int statusId)
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                _service.UpdateStatus(id, statusId);

                response = new SuccessResponse();
            }
            catch (Exception ex)
            {
                code = 500;
                response = new ErrorResponse(ex.Message);
            }
            return StatusCode(code, response);
        }

    }
}
