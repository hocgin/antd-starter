import { success } from './utils/result';

export default {
  'GET /worked': (req: any, res: any) => {
    return res.json(success());
  },
};
