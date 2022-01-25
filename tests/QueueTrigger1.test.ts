import QueueTrigger1 from "../QueueTrigger1/index"
import { TestAzureQueueMetadata, TestContext } from "../lib/index";

describe("QueueTrigger1 unit tests", () => {

    it("should call context.log", async () => {
        const context = new TestContext();
        const queueMetadata: TestAzureQueueMetadata = {
            dequeueCount: 3,
        };
        context.bindingData = queueMetadata;
        const spy = jest.spyOn(context, "log");
        await QueueTrigger1(context, { name: "test" });
        expect(spy).toHaveBeenCalledTimes(1);
    });
});