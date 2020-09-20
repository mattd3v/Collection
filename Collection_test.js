import Collection from "./Collection.js";

import { assert } from "./deps.js";

/** @test {Collection} */
Deno.test("Collection is an instance of Array", () => assert(new Collection() instanceof Array));

