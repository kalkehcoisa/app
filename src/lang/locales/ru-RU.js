export const dateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }
};

export default {
  about_directus: "О Directus",
  activity: "Активность",
  activity_log: "Логи активности",
  activity_outside_directus: "Этот элемент был создан за пределами Directus.",
  add_field_filter: "Добавить фильтр поля",
  add_new: "Создать",
  add_note: "Добавить заметку для пользователей...",
  additional_info: "Дополнительная Инфо.",
  admin_email: "Е-мейл Админа",
  admin_password: "Пароль Админа",
  admin_settings: "Настройки Админа",
  advanced_options: "Дополнительные настройки",
  all: "Все",
  almost_done_copy:
    "Каждый интерфейс может быть идеально адаптирован к вашим потребностям. Ниже приведены доступные параметры для этого поля, но требуются только некоторые.",
  almost_done_options: "Почти сделано! Теперь просто просмотрите параметры интерфейса ниже.",
  api_installed: "API Успешно Установлен",
  api_url: "API URL",
  auto_generate: "Авто-Генерация",
  auto_generated: "Автоматический сгенерировано...",
  batch: "Пакетное",
  batch_delete: "Пакетное Удаление",
  batch_delete_confirm:
    "Никаких элементов не выбрано | Вы уверены, что хотите удалить этот элемент? Это действие не может быть отменено. | Вы уверены, что хотите удалить эти элементы {count}? Это действие не может быть отменено.",
  batch_edit: "Пакетная редактирование элементов: {collection}",
  between: "Между",
  bookmarks: "Закладки",
  both: "Оба",
  cancel: "Отмена",
  cant_disable_primary:
    "Вы не можете отключить первичный ключ в существующем поле. Вместо этого удалите это поле.",
  change_project: "Поменять Проект",
  choose_interface: "Выберите интерфейс для управления этими данными.",
  choose_one: "Выберите Одно",
  choose_project: "Выберите Проект",
  clear: "Очистить",
  click_to_toggle_all_none: "Нажмите, чтобы включить/выключить весь столбец",
  collection: "Коллекция",
  collection_contains_items: "{collection} содержит {count} элементов",
  collection_count: "Нет Коллекции | Одна Коллекция | {count} Коллекции",
  collection_invalid_name: "Не правильная имя коллекции",
  collection_names_cannot_be_changed:
    "Названия коллекций не могут быть отредактированы в настоящее время.",
  collection_removed: "Коллекция Удалена: {collection}",
  collection_updated: "Коллекция Обновлена: {collection}",
  collections: "Коллекции",
  "collections-directus_activity": "Активность",
  "collections-directus_files": "Файлы",
  "collections-directus_users": "Пользователи",
  collections_and_fields: "Коллекция и Поля",
  coming_soon: "Скоро будет",
  comment: "Комментарий",
  comments: "Комментарии",
  config_error: "Отсутствует Конфиг",
  config_error_copy: "Убедитесь, что вы создали файл конфигурации приложения",
  connection: "Соединение",
  contains: "Содержит",
  create: "Создать",
  create_collection: "Создать Коллекцию",
  create_field: "Создать Поле",
  create_role: "Создать Роль",
  creating_item: "Создание элемента",
  creating_item_page_title: "Создание элемента: {collection}",
  creating_role: "Создание Роля",
  currently_selected: "Сейчас выделено: {thing}",
  database_connection: "Соединение с Базой Данных",
  database_connection_copy:
    "Далее нам нужно знать, как подключиться к базе данных, где будет управляться этот проект.",
  datatype: "Тип данных",
  datatypes: {
    mysql: {
      BIGINT:
        "Целое число Когда подписано (допускает отрицание) длина составляет от -9,223,372,036,854,775,808 до 9,223,372,036,854,775,807, в противном случае максимальное значение составляет 18,446,744,073,709,551,615.",
      BOOLEAN: "Правда или ложь. Сохраняется как 1 или 0 соответственно.",
      CHAR:
        "Недвоичная строка фиксированной длины, дополненная пробелами. Длина может быть от 0 до 255 символов.",
      DATE: "Дата. Позволяет `1000-01-01` к `9999-12-31`.",
      DATETIME: "Дата и всремя. Позволяет `1000-01-01 00:00:00` к `9999-12-31 23:59:59`.",
      DECIMAL:
        "Точное число (например, для валюты), длиной от 1 до 65 цифр (L) и от 0 до 30 цифр (D). Формат длины: `L, D`",
      DOUBLE: "Примерное двоичное число, 8 байт с плавающей запятой.",
      FLOAT: "Примерное двоичное число, 4 байта с плавающей запятой.",
      INT:
        "Целое число Когда подписано (допускает отрицание) длина составляет от 2,147 483,648 до 2,147,483,647, в противном случае максимальное значение составляет 4,294,967,295.",
      LONGTEXT: "Строка с максимальной длиной 4,294,967,295 символов.",
      MEDIUMINT:
        "Целое число Когда подписано (допускает отрицание) длина составляет от -8,388,608 до 8,388,607, в противном случае максимальное значение составляет 16,777,215.",
      MEDIUMTEXT: "Строка с максимальной длиной 16,777,215 символов.",
      SMALLINT:
        "Целое число При знаке (допускает отрицание) длина составляет от -32 768 до 32 767, в противном случае максимальное значение составляет 65,535.",
      TEXT: "Строка с максимальной длиной 65,535 символов.",
      TIME: "Время. Позволяет `-838:59:59` к `838:59:59`.",
      TIMESTAMP: "Дата и всремя. Позволяет `1970-01-01 00:00:01` UTC к `2038-01-19 03:14:07` UTC.",
      TINYINT:
        "Целое число При знаке (допускает отрицание) длина составляет от -128 до 127, в противном случае максимальное значение равно 255.",
      TINYTEXT: "Строка с максимальной длиной 255 символов.",
      VARCHAR:
        "Недвоичная строка переменной длины. Длина может быть от 0 до 65,535 символов (MySQL 5.0.3+).",
      YEAR: "Год. Позволяет `1901` к `2155` or `0000`"
    }
  },
  date_and_time: "Дата и Время",
  db_column_name: "Имя столбца базы данных...",
  db_datatype: "Тип данных {db}",
  db_name: "Имя базы данных",
  db_password: "Пароль пользователя базы данных",
  db_type: "Тип базы данных",
  db_update_failed: "Базы данных не может обновлен",
  db_updated: "Базы данных успешно обновлены",
  db_user: "Пользователь базы данных",
  default: "По умолчанию",
  delete: "Удалить",
  delete_are_you_sure:
    "Вы уверены, что хотите удалить этот элемент? Это действие не может быть отменено.",
  delete_bookmark: "Удалить закладку",
  delete_bookmark_body:
    "Вы уверены, что хотите удалить эту закладку? Это действие не может быть отменено.",
  delete_collection_are_you_sure:
    "Вы уверены, что хотите удалить эту коллекцию? Это действие не может быть отменено.",
  delete_confirmation: "Подтвердить удаление",
  delete_field_are_you_sure:
    'Вы уверены, что хотите удалить поле "{field}"? Это действие не может быть отменено.',
  delete_role_are_you_sure:
    'Вы уверены, что хотите удалить роль "{имя}"? Это действие не может быть отменено.',
  description: "Описание",
  dialog_beginning: "Начало диалогового окна.",
  discard_changes: "Отменить изменения",
  display_name: "Отображаемое имя",
  dont_manage: "Нельзя править",
  dont_manage_copy:
    "Привилегии, настройки и настройки коллекции {collection} будут навсегда удалены из системы! Уверены ли вы?",
  dont_show: "Не показывать",
  drop_files: "Не могу перетащить файлы | Перетащите файл сюда ... | Перетащите файлы сюда ...",
  duplicate: "Дубликат",
  duplicating_field: "Дублирующее Поле",
  editing: "Редактировать элемент: {collection}",
  editing_item: "Редактировать элемент",
  editing_items: "Пакетное редактировние {count} элементов",
  editing_my_profile: "Ред. Мой Профиль",
  editing_single: "Редактирование {collection}",
  email: "Email",
  email_address: "Email адресс",
  embed: "Встроить",
  embed_placeholder: "YouTube, Vimeo, или другие ссылки",
  empty_collection: "Пустая Коллекция",
  empty_collection_body: "В этой коллекции пока нет предметов",
  enable_manual_sorting: "Включить сортировку вручную",
  enter_collection_name: "Введите имя Коллекций...",
  enter_role_name: "Введите имя роля...",
  enter_value: "Введите значение",
  environment: "Environment",
  equal_to: "Равно",
  error_unknown: "Неизвестная ошибка. Попробуйте позже.",
  errors: {
    "11": "Не удается подключиться к базе данных",
    "100": "Неверное имя пользователя и/или пароль",
    "101": "Вышли из-за неактивности",
    "102": "Вышли из-за неактивности",
    "103": "Пользователь не активен",
    "106": "Неверное имя пользователя и/или пароль",
    "107": "Пользователь не найден",
    "-1": "Не удалось связаться с API"
  },
  esc_cancel: "Escape отменит и закроет окно.",
  event_count: "Нет событии | Одно событие | {count} событии",
  existing: "Существующий",
  extension_error: "Не удалось загрузить расширение {ext}.",
  extensions_missing: "Расширения не найдены",
  extensions_missing_copy: "Убедитесь, что у вас установлены системные расширения.",
  fetching_data: "Получение данных",
  field: "Поле",
  field_already_exists: "{field} Уже существует",
  field_created: "{field} Поле создано",
  field_removed: "{field} Поле удалено",
  field_type: "Тип Поля",
  field_updated: "{field} Поле обновлено",
  fields: "Поля",
  fields_are_saved_instantly: "Изменения сохраняются мгновенно",
  fieldtypes: {
    alias: "Поля, которые не сохраняют данные или не имеют соответствующих столбцов базы данных",
    array: "Стандартный формат массива в ответе API",
    date: "Дата, например: 2018-09-19",
    datetime: "Дата и время в формате ISO, например: 2018-09-19T14: 00: 43.381Z",
    datetime_created:
      "Системное поле для отслеживания даты и времени создания элемента, используемого ревизиями",
    datetime_updated:
      "Системное поле для отслеживания даты и времени обновления элемента, используемого ревизиями",
    decimal: "Число с десятичным числом",
    file: "Внешний ключ к directus_files.id",
    group: "Визуально группирует поля вместе, дети сохраняют группу в directus_fields.group",
    integer: "Целое число",
    json: "Стандартный формат JSON в ответе API",
    lang: "Специфично для интерфейсов перевода, здесь хранится языковой ключ",
    m2o: "Отношения многие-к-одному",
    o2m: "Отношения один ко многим",
    sort: "Системное поле, используемое при переупорядочении элементов перетаскивания",
    status: "Системное поле, используемое для публикации рабочих процессов",
    string:
      "Любой текст, цифры, пробелы или символы; определяется и ограничивается его длиной (количество символов)",
    time: "Время, например: 14:09:22",
    translation:
      "Это один-ко-многим, специфичный для интерфейсов перевода, хранит многоязычный контент",
    user_created:
      "Системное поле для отслеживания пользователя, который создал элемент, используемый ревизиями",
    user_updated:
      "Системное поле для отслеживания пользователя, который обновил элемент, используемый ревизиями",
    uuid: "Универсально уникальный идентификатор"
  },
  file: "Файл",
  file_library: "Библиотека Файлов",
  file_upload: "Загрузить файл(ы)",
  forgot_password: "Забыли пароль",
  greater_than: "Больше",
  greater_than_equal: "Больше или равно",
  help_and_docs: "Помощь & Доки",
  hidden_browse: "Скрыто на Обзор",
  hidden_detail: "Скрыто на детали",
  host: "Хост",
  in_list: "Один их этих",
  info: "Инфо",
  initial_schema: "Выберите начальную схему",
  initial_schema_copy:
    "Выберите из существующих архитектур баз данных или начните заново. Вы всегда можете расширить и настроить это позже.",
  install: "Устанавить",
  install_copy: "Этот API еще не настроен. Вы хотите установить и настроить его сейчас?",
  intelligent_defaults:
    "Расширенные параметры позволяют настроить способ хранения данных в базе данных и настроить дополнительные параметры приложения.",
  interface: "Интерфейс",
  interface_count: "Нет Интерфейсов | Один Интерфейс | {count} Интерфейсов",
  interface_settings:
    "Каждый интерфейс может быть идеально адаптирован к вашим потребностям. Ниже представлены доступные опции для этого интерфейса, но требуются только некоторые.",
  interfaces: "Интерфейсы",
  is_empty: "Пустой",
  is_not_null: "Не NULL",
  is_null: "NULL",
  item_count: "Нет элементов | Один элемент | {count} элементов",
  item_count_filter:
    "Нет отфильтрованных элементов | Один отфильтрованный элемент | {count} Отфильтрованных элементов",
  item_deleted: "Элемент удален",
  item_saved: "Элемент сохранен | {count} Элементов сохранено",
  junction_collection: "Узловая Коллекция",
  keep_editing: "Продолжайте редактировать",
  latency: "Задержка",
  learn_more: "Узнать больше",
  leave_comment: "Оставить комментарий...",
  length: "Длина",
  length_disabled_placeholder: "Длина определяется типом данных",
  less_than: "Меньше",
  less_than_equal: "Меньше или равно",
  limited: "Лимитированно",
  loading: "Загрузка...",
  loading_more: "Загрузка элементов...",
  login: "Войти",
  m2m: "Многое к многому (M2M)",
  m2o: "Многое к одному (M2O)",
  manage: "Править",
  manage_started: "Начали править {collection}",
  manage_stopped: "Останавили править {collection}",
  max_one_primary_key: "Вы можете иметь только 1 поле первичного ключа для каждой коллекции",
  max_size: "Макс. размер: {size}",
  mixed: "Смешанное",
  more_options: "Больше вариантов",
  my_activity: "Мои активности",
  my_profile: "Мой профиль",
  name: "Имя",
  name_bookmark: "Как бы вы хотели назвать эту закладку?",
  name_field: "Давайте назовем это поле {field} и добавим полезную заметку для пользователей.",
  navigate_changes:
    "Вы уверены, что хотите покинуть эту страницу? Внесенные вами изменения будут потеряны, если вы уйдете с этой страницы.",
  new: "Новый",
  new_file: "Новый файл",
  next: "Дальше",
  no_collections: "Нет коллекций настройки",
  no_collections_body: "Кажется, что пока нет никаких коллекций",
  no_fields: "Нет настроек поля",
  no_fields_body: "Похоже, в этой коллекции еще нет настроек полей",
  no_files: "Нет файлов",
  no_files_body: "Похоже, еще не было загружено ни одного файла",
  no_interface_error: "Поле {field} не имеет настройки интерфейса",
  no_related_entries: "Не имеет связанных записей",
  no_results: "Нет результатов",
  no_results_body: "Текущие фильтры не соответствуют ни одному элементу коллекции",
  none: "None",
  not_between: "Не между",
  not_contains: "Не содержит",
  not_empty: "Не пусто",
  not_equal_to: "Не равно",
  not_in_list: "Ни один из них",
  note: "Заметка",
  note_hidden: "[Узнать больше](https://docs.directus.io/guides/collections.html#hidden)",
  note_icon: "Значок, показанный на боковой панели навигации приложения",
  note_managed:
    "[Узнать больше](https://docs.directus.io/guides/collections.html#managing-collections)",
  note_note: "Внутреннее описание...",
  note_single: "[Узнать больше](https://docs.directus.io/guides/collections.html#single)",
  numeric: "Числовой",
  o2m: "Одно ко многому (O2M)",
  ok: "OK",
  open_on_gh: "Открыть в GitHub",
  operator: "Оператор",
  options: "Опций",
  other: "Другой",
  page_not_found: "Страница не найдена",
  page_not_found_body: "Страница, которую вы ищете, кажется, не существует.",
  password: "Пароль",
  password_reset_sent: "Письмо для сброса пароля отправлено на адрес {email}",
  permission_states: {
    always: "Все время",
    create: "Создание",
    full: "Все",
    mine: "Только мое",
    none: "Нет",
    on_create: "Во время создания",
    on_update: "Во время обновления",
    read: "Только для чтения",
    role: "Только Роль",
    update: "Обновление"
  },
  permissions: "Права доступа",
  permissions_admin:
    "Администраторы имеют доступ ко всем управляемым данным в системе по умолчанию.",
  permissions_no_collections: "У этого проекта еще нет коллекций.",
  popular: "Популярное",
  port: "Порт",
  powered_by_directus: "Работает на Directus",
  preview_and_revert: "Предв. просмотр и возврат",
  primary_key: "Первичный ключ",
  project: "Проект",
  project_info: "Информация о Проекте",
  project_info_copy:
    "Ниже приведены несколько вопросов о вашем проекте, в том числе учетные данные вашего первого администратора.",
  project_key: "Ключ проекта",
  project_name: "Имя Проекта",
  read: "Чтение",
  readable_fields: "Читабельные Поля",
  readable_fields_copy: "Выберите поля, которые пользователь может просматривать",
  readonly: "Только для чтения",
  regex: "RegEx",
  related_collection: "Связанная Коллекция",
  related_entries: "Имеет связанные записи",
  relation_setup: "Поскольку это реляционное поле, нам нужно отобразить соответствующие поля.",
  relation_setup_copy:
    "Существуют разные типы реляционных данных, этот интерфейс использует один из них, называемый {relation}.",
  relational: "Реляционный",
  relationship: "Отношения",
  remove: "Удалить",
  remove_related: "Удалить связанные элементы",
  report_issue: "Сообщить о проблеме",
  request_feature: "Запросить Фичи",
  required: "Необходимые",
  reset_password: "Сбросить Пароль",
  reset_preferences: "Сбросить все настройки списка",
  revert: "Возвратить",
  revert_copy: "Вы хотите вернуть этот элемент к тому, какой он был в {date}?",
  role_count: "Нет роли | Одна роль | {count} роли",
  role_settings: "Опций Ролей",
  roles: "Роли пользователей",
  save: "Сохранить",
  save_and_add: "Сохранить и Добавить новую",
  save_and_stay: "Сохранить и Остаться",
  save_as_bookmark: "Сохранить и в закладки",
  save_as_copy: "Сохранить и Копировать",
  schema: "Схема",
  search: "Поиск",
  search_interface: "Поиск интерфейса...",
  select_existing: "Выбрать из существующего",
  select_field: "Выбрать поле",
  select_fields: "Выбрать поля",
  select_from_device: "Выбрать из Девайса",
  select_interface_below: "Выберите интерфейс ниже",
  select_statuses: "Выбрать Статусы",
  select_statuses_copy: "Выберите статусы, которые пользователь может использовать",
  server_details: "Детальнее о сервере",
  server_error: "Ошибка сервера",
  server_error_copy: "Что-то не так с сервером или базой данных",
  server_trouble: "Проблемы с сервером",
  server_trouble_copy:
    "Повторите попытку позже или обратитесь за помощью к системному администратору.",
  settings: "Настройки",
  settings_collections_fields: "Коллекции и Поля",
  settings_extensions: "Расширения",
  settings_global: "Глобальные настройки",
  settings_permissions: "Роли и права доступа",
  settings_project: "Настройки Проекта",
  settings_saved: "Настройки сохранены",
  settings_update_database: "Обновить базу данных",
  settings_update_database_confirm:
    "Это обновит системные поля в вашей базе данных до последней версии Directus. Пожалуйста, сделайте резервную копию перед запуском этой операции.",
  settings_update_database_subtext: "Выполнить скрипт",
  show_directus_collections: "Показать системные коллекций Directus'а",
  sign_in: "Войти в систему",
  sign_out: "Выйти",
  sign_out_confirm: "Вы уверены, что хотите выйти?",
  sign_out_confirm_edits:
    "Вы уверены, что хотите выйти? Все несохраненные изменения будут потеряны.",
  signing_in: "Вход в систему",
  something_went_wrong: "Что-то пошло не так.",
  something_went_wrong_body:
    "Неисправность обработки запроса. Попробуйте еще раз после обновления страницы.",
  sort_by: "Сортировать по",
  statuses: "Статусы",
  text: "Текст",
  this_collection: "Эта коллекция",
  to: "к",
  unique: "Уникальный",
  unsaved_changes_copy:
    "У вас есть несохраненные изменения! Вы уверены, что хотите покинуть эту страницу?",
  update: "Обновить",
  update_confirm: "Вы уверены, что хотите обновить {count} элементы?",
  update_field: "Обновить Поле",
  upload_exceeds_max_size:
    "{filename} не может быть загружено. Ваш сервер не настроен для обработки загрузок такого размера.",
  user_directory: "Папка пользователя",
  user_edit_warning:
    "{first_name} {last_name} также редактирует этот элемент. Пожалуйста, согласуйте их, чтобы не потерять свои изменения.",
  validation: "Проверка",
  value: "Значение",
  values: "Значения",
  version: "Версия",
  version_and_updates: "Версия и Обновления",
  view_type: "Посмотреть как...",
  welcome: "Добро пожаловать",
  writable_fields: "Поля для записи",
  writable_fields_copy: "Выберите поля, которые пользователь может редактировать",
  yes: "Да"
};
