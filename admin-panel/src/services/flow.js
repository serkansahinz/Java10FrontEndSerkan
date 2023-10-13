import axios from "axios";
import { flowUrl } from "./apiUrl";
import { getSettings } from "./settings";
import { getUser } from "./user";
import { getRole } from "./role";

export const getFlows = async () => {
  const response = await axios.get(flowUrl);
  return response.data;
};

export const getFlow = async (id) => {
  const response = await axios.get(`${flowUrl}/${id}`);
  return response.data;
};

export const addFlow = async (flow) => {
  const response = await axios.post(flowUrl, flow);
  return response.data;
};

export const updateFlow = async (flow) => {
  const response = await axios.put(
    `${flowUrl}/${flow.id}`,
    flow
  );
  return response.data;
};

export const deleteFlow = async (id) => {
  const response = await axios.delete(`${flowUrl}/${id}`);
  return response.data;
};

export const getFlowsByDefaultUser = async () => {
  // getSettings().then((settings) => {
  //   const defaultUser = settings.user;

  //   getUser(defaultUser).then((user) => {
  //     let flowIds = [];
  //     user.roles.forEach((roleId) => {
  //       getRole(roleId).then((role) => {
  //         flowIds = [...flowIds, ...role.flows];
  //       });
  //     });
  //     flowIds = [...new Set(flowIds)];

  //     let flows = [];
  //     flowIds.forEach((pId) => {
  //       getFlow(pId).then((p) => {
  //         flows = [...flows, p.name];
  //       });
  //     });
  //     return flows;
  //   });
  // });
  const settings = await getSettings();
  const defaultUser = settings.user;

  const user = await getUser(defaultUser);

  let flowIds = [];
  for (const roleId of user.roles) {
    const role = await getRole(roleId);
    flowIds = [...flowIds, ...role.flows];
  }
  flowIds = [...new Set(flowIds)];

  let flows = [];
  for (const pId of flowIds) {
    const p = await getFlow(pId);
    flows = [...flows, p.name];
  }

  return flows;
};
