"use strict";
(() => {
var exports = {};
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 5668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

const prisma = new client_namespaceObject.PrismaClient();

;// CONCATENATED MODULE: ./lib/db.ts

async function getAllTodos() {
    const data = await prisma.todo.findMany();
    return data;
}
async function createTodo(description) {
    await prisma.todo.create({
        data: {
            description
        }
    });
}

;// CONCATENATED MODULE: ./src/pages/api/todo.ts

async function handler(req, res) {
    if (req.method === "POST") {
        const { description  } = req.body;
        await createTodo(description);
        return res.status(200).json({
            message: "Success"
        });
    } else if (req.method === "GET") {
        const data = await getAllTodos();
        return res.status(200).json(data);
    }
    res.status(200).json({
        name: "John Doe"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5668));
module.exports = __webpack_exports__;

})();