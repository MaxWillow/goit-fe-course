import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../../node_modules/pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from '../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js';

export default function setPNotifySettings() {
  PNotify.defaults.styling = 'material';
  PNotify.defaults.icons = 'material';
  PNotify.alert(
    'Нет прав доступа к геопозиции, используйте поиск по имени города.',
  );
}
