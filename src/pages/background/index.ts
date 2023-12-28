import { WebExtension } from '@hocgin/browser-addone-kit';
import { ServiceWorkerOptions } from '@hocgin/browser-addone-kit/dist/esm/browser/serviceWorker';
import '@/request.config';
import Config from '@/config';
import { Provider } from '@hocgin/hkit';

WebExtension.kit.serviceWorker({
  ...ServiceWorkerOptions.default,
  provider: Provider.Dove,
  projectId: Config.getProjectId(),
});
