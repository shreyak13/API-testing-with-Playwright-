import {test, expect} from '@playwright/test';
test("Test Get API",async function({request}) {
   const resp= await request.get("https://jsonplaceholder.typicode.com/posts/1")
   

   const respstatus= await resp.status()
   //console.log(respstatus)

   const respstatusText= await resp.statusText()
   console.log(respstatusText)

   const respbodyy= await resp.body()

   const respjson = await resp.json()
  /// console.log(respjson)

  const respHeaders = await resp.headers()
  //console.log(respHeaders)

  expect(respstatus).toBe(200)
  expect(respstatusText).toBe("Ok")
  expect(resp.ok()).toBeTruthy()
  expect(respjson).toHaveProperty("userId",1)
  expect(respjson.body).tocontain("quia et suscipit")

})