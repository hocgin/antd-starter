import {success} from './utils/result';

export default {
  'GET /worked': (req, res) => {
    return res.json(success())
  },
};
