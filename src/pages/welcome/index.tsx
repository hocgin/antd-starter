import {useEffect} from "react";
import {WebExtension} from "@hocgin/browser-addone-kit";
import {useHistory} from "umi";

export default () => {
  const {location} = useHistory();
  let query: any = location?.query ?? {};
  useEffect(() => {
    console.log('query?.token', query?.token);
    WebExtension.kit.setUserToken(query?.token).then(() => {
      WebExtension.kit.getUserToken().then(console.log)
    });
  }, []);

  return <div>
    <p>登陆成功</p>
    <p>login success</p>
  </div>;
};
