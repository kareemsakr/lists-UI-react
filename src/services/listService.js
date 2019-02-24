import httpService from "./httpService";
export async function getList(userId) {
  const { data } = await httpService.get("/lists/" + userId);
  return data;

  //   try {
  //     const { data } = await httpService.get("s" + config.apiURL + "/movies");
  //     console.log("were in the try");
  //     return data;
  //   } catch (error) {
  //     console.log("were in the catch");
  //   }
}

export async function saveList(list) {
  const listCopy = { ...list };
  delete listCopy._id;

  console.log(list);
  if (list._id) {
    //update (put)
    const response = await httpService.put(getListURL(list._id), listCopy);
    return response.data;
  } else {
    //create new (post)
    const response = await httpService.post("/lists/", listCopy);
    return response.data;
  }
}

function getListURL(id) {
  return "/lists/" + id;
}
