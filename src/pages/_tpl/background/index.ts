import { WebExtension } from '@hocgin/browser-addone-kit';
import { ServiceWorkerOptions } from '@hocgin/browser-addone-kit/es/browser/serviceWorker';
import '@/request.config';

WebExtension.kit.serviceWorker(ServiceWorkerOptions.default);
