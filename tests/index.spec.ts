let mockNodeFetch = jest.fn()
jest.mock("node-fetch", () => mockNodeFetch)

describe('Index module', () => {
    test('Call method and retrieve api mocked data', async () => {
        let consoleLogSpy = jest.spyOn(console, "log")
        let consoleErrorSpy = jest.spyOn(console, "error")

        process.argv = ["0","1","renata"]
        let returnBody = {count:35286,name:"renata",age:53}
        const response = Promise.resolve({
            ok: true,
            status: 200,
            json: () => {return returnBody}
        })
        mockNodeFetch.mockImplementation(() => response)
        await (await require("../src/index.ts"))
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
        expect(consoleLogSpy).toHaveBeenCalledWith({count: 35286,name: "renata",age: 53});
    })
})