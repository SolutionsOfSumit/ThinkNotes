import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv"

dotenv.config()

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "20 s") //10 requests under 20 seconds

})

export default ratelimit 