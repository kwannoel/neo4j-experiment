const neo4j = require("neo4j-driver")

const { setup, teardown } = require("./mock.js")

const driver = neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "abc123"))
const session = driver.session()

async function main() {
    try {
        // Populate the database
        const result = await session.writeTransaction(tx => tx.run(setup))

        // const singleRecord = result.records[0]
        // const greeting = singleRecord.get(0)

        // console.log(greeting)

        // Teardown
        //await session.writeTransaction(tx => tx.run(teardown))

    } finally {
    await session.close()
    }

    // on application exit:
    await driver.close()

}

main()
