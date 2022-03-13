const express = require("express")
const router = express()

//引入控制器
const {getApis,createApi,getApi,updateApi,deleteApi} = require('../controllers/api')

router.route("/").get(getApis).post(createApi)

router.route("/:id").get(getApi).put(updateApi).delete(deleteApi)

module.exports = router