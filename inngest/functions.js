import { USER_TABLE } from "@/configs/schema";
import { inngest } from "./client";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  },
);

export const CreateNewUser= inngest.createFunction(
  {id:'create-user'},
  {event:'user.create'},
  async({event,step})=>{
    //GetEventData
    const {user}=event.data;
    const result= await step.run('Check User and create New if not found in DB', async()=>{
      const result = await db
            .select()
            .from(USER_TABLE)
            .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
      
          console.log(result);
      
      if (result?.length == 0) {
            //Else add to DB
        const userResp = await db
          .insert(USER_TABLE)
          .values({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
          })
          .returning({ id: USER_TABLE.id })
          return userResp;
      }
      return result;
    })
    return 'Success';
  }

  //Send welcome Notification
  //Send welcome Notification after two days after user joined
  
);