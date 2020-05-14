const { authenticate } = require("@feathersjs/authentication").hooks;
const addUserId = require("../../hooks/add-user-id");
const relationUser = require("./hooks/relation-user");
const relationUserById = require("./hooks/relation-user-by-id");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [relationUser()],
    get: [relationUserById()],
    create: [addUserId()],
    update: [relationUser()],
    patch: [relationUser()],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
