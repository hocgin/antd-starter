import { success } from './_utils/result';

export default {
  'GET /api/worked': (req: any, res: any) => {
    return res.json(success());
  },
  'GET /api/ssr': (req: any, res: any) => {
    return res.json(success('ssr'));
  },
};
