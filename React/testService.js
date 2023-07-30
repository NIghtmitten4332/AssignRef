import axios from "axios";
import {
  onGlobalError,
  onGlobalSuccess,
  API_HOST_PREFIX,
} from "./serviceHelpers";

const testService = { testUrl: `${API_HOST_PREFIX}/api/tests` };

testService.getAll = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getById = (id) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/${id}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getCreatedBy = (pageIndex, pageSize, createdBy) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/createdBy?pageIndex=${pageIndex}&pageSize=${pageSize}&createdBy=${createdBy}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.search = (pageIndex, pageSize, query) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.create = (payload) => {
  const config = {
    method: "POST",
    url: `${testService.testUrl}`,
    data: payload,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.updateTestQuestionsAnswers = (id, payload) => {
  const config = {
    method: "PUT",
    url: `${testService.testUrl}/results/${id}`,
    data: payload,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.remove = (id) => {
  const config = {
    method: "DELETE",
    url: `${testService.testUrl}/${id}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getAllResults = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/results/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.searchResults = (
  pageIndex,
  pageSize,
  query,
  startDate,
  endDate
) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/results/search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}&startDate=${startDate}&endDate=${endDate}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.CreateInstance = (payload) => {
  const config = {
    method: "POST",
    url: `${testService.testUrl}/results`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getById = (id) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getByConferenceId = (conferenceId) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/conferences/${conferenceId}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getByIdWithDetails = (testInstanceId) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}/results/detailed/${testInstanceId}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getAllStatistics = (id) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}Analytics/statistics/?id=${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.getAllAverage = (id) => {
  const config = {
    method: "GET",
    url: `${testService.testUrl}Analytics/average/?id=${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

testService.insertIntoResults = (testId, conferenceId) => {
  const config = {
    method: "POST",
    url: `${testService.testUrl}/new?testId=${testId}&conferenceId=${conferenceId}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export default testService;
