const { authenticate } = require("@feathersjs/authentication").hooks;
const sender = async (context) => {
  console.log(context.params.user._id);
  context.data.sender = context.params.user._id;

  return context;
};

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [sender],
    update: [],
    patch: [],
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
