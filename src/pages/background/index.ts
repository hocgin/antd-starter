import { WebExtension } from '@hocgin/browser-addone-kit';
import { ServiceWorkerOptions } from '@hocgin/browser-addone-kit/dist/esm/browser/serviceWorker';
import '@/request.config';
import { stringify } from 'query-string';
import Config from '@/config';

WebExtension.kit.serviceWorker({
  ...ServiceWorkerOptions.default,
  projectId: Config.getProjectId(),
  getUpdateURL: (extensionId: string, projectId: string) => {
    let queryStr = stringify({
      extensionId,
      update: true
    });
    return `https://logspot.hocgin.top/${projectId}_changelog?${queryStr}`;
  },
  getInstallURL: (extensionId: string, projectId: string) => {
    let queryStr = stringify({
      extensionId,
      install: true
    });
    return `https://logspot.hocgin.top/${projectId}?${queryStr}`;
  },
});
