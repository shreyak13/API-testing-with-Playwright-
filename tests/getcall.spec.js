import {test, expect} from '@playwright/test';
test("Test Get API",async function({request}) {
   const resp= await request.get("https://jsonplaceholder.typicode.com/posts/1")
   
   const respbodyy= await resp.body()

   const respjson = await resp.json()
   console.log(respjson)
})