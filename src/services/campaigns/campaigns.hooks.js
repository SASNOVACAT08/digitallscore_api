const { authenticate } = require("@feathersjs/authentication").hooks;
const addUserId = require("../../hooks/add-user-id");
const relationUser = require("./hooks/relation-user");
const relationUserById = require("./hooks/relation-user-by-id");
const createObjectives = require("./hooks/create-objectives");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [relationUser()],
    get: [relationUserById()],
    create: [addUserId(), relationUserById()],
    update: [relationUser()],
    patch: [],
    remove: [relationUser()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [createObjectives()],
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
