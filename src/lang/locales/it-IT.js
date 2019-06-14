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
  about_directus: "Informazioni su Directus",
  activity: "Attività",
  activity_log: "Log delle attività",
  activity_outside_directus: "Questo elemento è stato creato al di fuori di Directus.",
  add_field_filter: "Aggiungi un filtro",
  add_new: "Aggiungi nuovo",
  add_note: "Aggiungi una nota utile per gli utenti ...",
  additional_info: "Informazioni aggiuntive",
  admin_email: "Email dell'amministratore",
  admin_password: "Password dell'amministratore",
  admin_settings: "Impostazioni amministratore",
  advanced_options: "Opzioni avanzate",
  all: "Tutti",
  almost_done_copy:
    "Ogni interfaccia può essere perfettamente adattata alle tue esigenze. Di seguito sono elencate le opzioni disponibili per questo campo, ma solo alcune sono obbligatorie.",
  almost_done_options: "Quasi fatto! Ora rivedi le opzioni dell'interfaccia qui sotto.",
  api_installed: "API installata con successo",
  api_url: "API URL",
  auto_generated: "Generato automaticamente ...",
  batch: "Batch",
  batch_delete: "Batch Delete",
  batch_delete_confirm:
    "Nessun elemento è stato selezionato | Sei sicuro di voler eliminare questo articolo? Questa azione non può essere annullata. | Sei sicuro di voler eliminare questi {count} elementi? Questa azione non può essere annullata.",
  batch_edit: "Elementi di modifica batch: {collection}",
  between: "Fra",
  bookmarks: "segnalibri",
  both: "Tutti e due",
  cancel: "Annulla",
  cant_disable_primary:
    "Non è possibile disabilitare la chiave primaria su un campo esistente. Rimuovi invece questo campo.",
  change_project: "Cambia progetto",
  choose_interface: "Scegli un'interfaccia per come devono essere gestiti questi dati.",
  choose_one: "Scegline uno",
  choose_project: "Scegli Progetto",
  clear: "Chiaro",
  click_to_toggle_all_none: "Fai clic per attivare / disattivare l'intera colonna",
  collection: "Collezione",
  collection_contains_items: "{collection} contiene {count} elementi",
  collection_count: "Nessuna collezione | Una collezione | {count} Collezioni",
  collection_names_cannot_be_changed:
    "I nomi delle collezioni non possono essere modificati in questo momento.",
  collection_removed: "{collection} Collezione rimossa",
  collection_updated: "Collezione {collection} aggiornata",
  collections: "collezioni",
  "collections-directus_activity": "Attività",
  "collections-directus_files": "File",
  "collections-directus_users": "utenti",
  collections_and_fields: "Collezione e campi",
  coming_soon: "Prossimamente",
  comment: "Commento",
  comments: "Commenti",
  config_error: "Configurazione mancante",
  config_error_copy: "Assicurati di aver creato il file di configurazione dell'applicazione",
  connection: "Connessione",
  contains: "contiene",
  create: "Creare",
  create_collection: "Crea raccolta",
  create_field: "Crea campo",
  create_role: "Crea ruolo",
  creating_item: "Creazione di oggetti",
  creating_item_page_title: "Creazione dell'articolo: {collection}",
  creating_role: "Creazione del ruolo",
  currently_selected: "Attualmente selezionato: {thing}",
  database_connection: "Connessione al database",
  database_connection_copy:
    "Successivamente, è necessario sapere come connettersi al database in cui verrà gestito questo progetto.",
  datatype: "Tipo di dati",
  datatypes: {
    mysql: {
      BIGINT:
        "Un numero intero Quando è firmata (consentita negativa) la lunghezza è di -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807, altrimenti il ​​massimo è 18,446,744,073,709,551,615.",
      BOOLEAN: "Vero o falso. Viene salvato come 1 o 0 rispettivamente.",
      CHAR:
        "Una stringa non binaria a lunghezza fissa riempita a destra di spazi. La lunghezza può essere compresa tra 0 e 255 caratteri.",
      DATE: "Una data. Consente `1000-01-01` a` 9999-12-31`.",
      DATETIME: "Una data e ora. Consente `1000-01-01 00: 00: 00` a` 9999-12-31 23: 59: 59`.",
      DECIMAL:
        "Un numero preciso (es: per valuta), con lunghezza da 1 a 65 cifre (L) e da 0 a 30 cifre decimali (D). Formato di lunghezza: `L, D`",
      DOUBLE: "Un numero binario approssimativo, 8 byte con un punto decimale mobile.",
      FLOAT: "Un numero binario approssimativo, 4 byte con un punto decimale mobile.",
      INT:
        "Un numero intero Quando la lunghezza è firmata (consentita negativa) è di -2.147.483.648 a 2.147.483.647, altrimenti il ​​massimo è 4.294.967.295.",
      LONGTEXT: "Una stringa con una lunghezza massima di 4.294.967.295 caratteri.",
      MEDIUMINT:
        "Un numero intero Al momento della firma (consentito negativo) la lunghezza è di -8.388.608 a 8.388.607, altrimenti il ​​massimo è 16.777.215.",
      MEDIUMTEXT: "Una stringa con una lunghezza massima di 16.777.215 caratteri.",
      SMALLINT:
        "Un numero intero Quando si firma (consente negativo) la lunghezza è compresa tra -32.768 e 32.767, altrimenti il ​​massimo è 65.535.",
      TEXT: "Una stringa con una lunghezza massima di 65.535 caratteri.",
      TIME: "Un tempo. Permette `-838: 59: 59` a` 838: 59: 59`.",
      TIMESTAMP:
        "Una data e ora. Permette `1970-01-01 00: 00: 01` UTC a` 2038-01-19 03: 14: 07` UTC.",
      TINYINT:
        "Un numero intero Quando è firmata (consente negativo) la lunghezza è compresa tra -128 e 127, altrimenti il ​​massimo è 255.",
      TINYTEXT: "Una stringa con una lunghezza massima di 255 caratteri.",
      VARCHAR:
        "Una stringa non binaria di lunghezza variabile. La lunghezza può essere compresa tra 0 e 65.535 caratteri (MySQL 5.0.3+).",
      YEAR: "Un anno. Permette di `1901` a` 2155` o `0000`"
    }
  },
  date_and_time: "Appuntamento",
  db_column_name: "Nome colonna del database ...",
  db_datatype: "{db} Tipo di dati",
  db_name: "Nome del database",
  db_password: "Password utente del database",
  db_type: "Tipo di database",
  db_user: "Utente del database",
  default: "Predefinito",
  delete: "Elimina",
  delete_are_you_sure:
    "Sei sicuro di voler eliminare questo articolo? Questa azione non può essere annullata.",
  delete_bookmark: "Elimina segnalibro",
  delete_bookmark_body:
    "Sei sicuro di voler eliminare questo segnalibro? Questa azione non può essere annullata.",
  delete_collection_are_you_sure:
    "Sei sicuro di voler eliminare questa raccolta? Questa azione non può essere annullata.",
  delete_confirmation: "Elimina conferma",
  delete_field_are_you_sure:
    'Sei sicuro di voler cancellare il campo "{field}"? Questa azione non può essere annullata.',
  delete_role_are_you_sure: 'Eliminare il ruolo "{name}"? Questa azione non può essere annullata.',
  description: "Descrizione",
  dialog_beginning: "Inizio della finestra di dialogo.",
  discard_changes: "Non salvare le modifiche",
  display_name: "Nome da visualizzare",
  dont_manage: "Non gestire",
  dont_manage_copy:
    "Privilegi, preferenze e impostazioni per la raccolta {collection} verranno rimossi permanentemente dal sistema! Sei sicuro?",
  dont_show: "Non mostrare",
  drop_files: "Impossibile rilasciare i file | Trascina il file qui ... | Trascina i file qui ...",
  duplicate: "Duplicare",
  duplicating_field: "Campo di duplicazione",
  editing: "Modifica dell'articolo: {collection}",
  editing_item: "Modifica dell'articolo",
  editing_items: "Modifica batch {count} Articoli",
  editing_my_profile: "Modifica il mio profilo",
  editing_single: "Modifica di {collection}",
  email: "E-mail",
  email_address: "Indirizzo email",
  empty_collection: "Collezione vuota",
  empty_collection_body: "Non ci sono ancora articoli in questa collezione",
  enable_manual_sorting: "Abilita l'ordinamento manuale",
  enter_collection_name: "Inserisci il nome della raccolta ...",
  enter_role_name: "Inserisci il nome del ruolo ...",
  enter_value: "Inserisci valore",
  environment: "Ambiente",
  equal_to: "Uguale a",
  error_unknown: "Errore sconosciuto. Riprovare più tardi.",
  errors: {
    "11": "Impossibile connettersi al database",
    "100": "Nome utente e / o password errati",
    "101": "Disconnessione per inattività",
    "102": "Disconnessione per inattività",
    "103": "Utente inattivo",
    "106": "Nome utente e / o password errati",
    "107": "Utente non trovato",
    "-1": "Impossibile raggiungere l'API"
  },
  esc_cancel: "Fuga annullerà e chiuderà la finestra.",
  event_count: "Nessun evento | Un evento | {count} Eventi",
  existing: "Esistente",
  extension_error: "Si è verificato un problema durante il caricamento dell'estensione {ext}.",
  extensions_missing: "Nessuna estensione trovata",
  extensions_missing_copy: "Assicurati di avere le estensioni di sistema installate.",
  fetching_data: "Recuperando i dati",
  field: "Campo",
  field_already_exists: "{field} Existe déjà",
  field_created: "{field} Campo creato",
  field_removed: "{field} Field Removed",
  field_type: "Tipo di campo",
  field_updated: "{field} Field Updated",
  fields: "campi",
  fields_are_saved_instantly: "Modifiche salvate all'istante",
  fieldtypes: {
    alias: "Campi che non salvano dati o non hanno colonne di database corrispondenti",
    array: "Formato array standard nella risposta API",
    date: "Data, ad es .: 2018-09-19",
    datetime: "Una data e ora in formato ISO, ad esempio: 2018-09-19T14: 00: 43,381Z",
    datetime_created:
      "Campo di sistema per tracciare il datetime creato da un articolo, utilizzato dalle revisioni",
    datetime_updated:
      "Campo di sistema per tracciare il datetime di un articolo è stato aggiornato, utilizzato dalle revisioni",
    decimal: "Numero che include un decimale",
    file: "Chiave esterna per directus_files.id",
    group:
      "Raggruppa i campi insieme visivamente, i bambini salvano il gruppo in directus_fields.group",
    integer: "Numero intero",
    json: "Formato JSON standard nella risposta API",
    lang: "Specifico per le interfacce di traduzione, questo memorizza la chiave della lingua",
    m2o: "Relazione molti-a-uno",
    o2m: "Relazione uno-a-molti",
    sort:
      "Campo di sistema utilizzato nel riordino degli oggetti con trascinamento della selezione",
    status: "Campo di sistema utilizzato per la pubblicazione dei flussi di lavoro",
    string:
      "Qualsiasi testo, numeri, spazi o simboli; definito e limitato dalla sua lunghezza (numero di caratteri)",
    time: "Tempo, es: 14:09:22",
    translation:
      "Specifico per le interfacce di traduzione, questo o2m memorizza contenuti multilingue",
    user_created:
      "Campo di sistema per tracciare l'utente che ha creato un oggetto, utilizzato dalle revisioni",
    user_updated:
      "Campo di sistema per tracciare l'utente che ha aggiornato un elemento, utilizzato dalle revisioni",
    uuid: "Un identificatore univoco universale"
  },
  file: "File",
  file_library: "File Library",
  file_upload: "Upload File(s)",
  forgot_password: "Ha dimenticato la password",
  greater_than: "Più grande di",
  greater_than_equal: "Maggiore o uguale a",
  help_and_docs: "Aiuto e documenti",
  hidden_browse: "Nascosto su Sfoglia",
  hidden_detail: "Nascosto nei dettagli",
  host: "Ospite",
  in_list: "Uno di questi",
  info: "Info",
  initial_schema: "Scegli uno schema iniziale",
  initial_schema_copy:
    "Scegli tra le architetture di database esistenti o ricominciare da capo. Puoi sempre estenderlo e modificarlo più tardi.",
  install: "Installare",
  install_copy:
    "Questa API non è stata ancora installata. Vorresti installarlo e configurarlo ora?",
  intelligent_defaults:
    "Le opzioni avanzate ti consentono di configurare il modo in cui i dati verranno archiviati nel database e di modificare le impostazioni aggiuntive dell'app.",
  interface: "Interfaccia",
  interface_count: "Nessuna interfaccia | Un'interfaccia | {count} Interfacce",
  interface_settings:
    "Ogni interfaccia può essere perfettamente adattata alle tue esigenze. Di seguito sono elencate le opzioni disponibili per questa interfaccia, ma solo alcune sono necessarie.",
  interfaces: "interfacce",
  is_empty: "È vuoto",
  is_not_null: "Non è NULL",
  is_null: "È zero",
  item_count: "Nessun elemento | Un articolo | {count} Articoli",
  item_count_filter: "Nessun elemento filtrato | Un articolo filtrato | {count} Articoli filtrati",
  item_deleted: "Elemento eliminato",
  item_saved: "Elemento salvato | {count} Articoli salvati",
  junction_collection: "Collezione Junction",
  keep_editing: "Continua a modificare",
  latency: "Latenza",
  learn_more: "Per saperne di più",
  leave_comment: "Lascia un commento...",
  length: "Lunghezza",
  less_than: "Meno di",
  less_than_equal: "Minore o uguale a",
  limited: "Limitato",
  loading: "Caricamento in corso...",
  loading_more: "Caricamento di più articoli ...",
  login: "Accesso",
  m2m: "Molti a molti (M2M)",
  m2o: "Molti a uno (M2O)",
  manage: "Gestire",
  max_one_primary_key: "È possibile avere solo 1 campo chiave primaria per collezione",
  max_size: "Max. Dimensioni: {size}",
  mixed: "Misto",
  more_options: "Più opzioni",
  months: {
    january: "Gennaio",
    february: "Febbraio",
    march: "Marzo",
    april: "Aprile",
    may: "Potrebbe",
    june: "Giugno",
    july: "luglio",
    august: "Agosto",
    september: "Settembre",
    october: "Ottobre",
    november: "Novembre",
    december: "Dicembre"
  },
  my_activity: "Le mie attività",
  my_profile: "Il mio profilo",
  name: "Nome",
  name_bookmark: "Come ti piacerebbe chiamare questo segnalibro?",
  name_field: "Diamo un nome al campo {field} e aggiungiamo una nota utile per gli utenti.",
  navigate_changes:
    "Sei sicuro di voler lasciare questa pagina? Le modifiche apportate andranno perse se ti allontani da questa pagina.",
  new: "Nuovo",
  new_file: "New File",
  next: "Il prossimo",
  no_collections: "Nessuna raccolta di collezioni",
  no_collections_body: "Sembra che non ci siano ancora impostazioni per le raccolte",
  no_fields: "Nessuna installazione di campi",
  no_fields_body: "Sembra che questa raccolta non abbia ancora nessuna configurazione dei campi",
  no_files: "Nessun documento",
  no_files_body: "Sembra che non siano stati ancora caricati file",
  no_interface_error: "Field {field} non ha una configurazione dell'interfaccia",
  no_related_entries: "Non ha voci correlate",
  no_results: "Nessun risultato",
  no_results_body: "I filtri attuali non corrispondono ad alcun elemento della collezione",
  none: "Nessuna",
  not_between: "Non in mezzo",
  not_contains: "Non contiene",
  not_empty: "Non è vuoto",
  not_equal_to: "Non uguale a",
  not_in_list: "Non uno di questi",
  note: "Nota",
  note_hidden: "[Ulteriori informazioni] (https://docs.directus.io/guides/collections.html#hidden)",
  note_icon: "L'icona mostrata nella barra laterale di navigazione dell'app",
  note_managed:
    "[Ulteriori informazioni] (https://docs.directus.io/guides/collections.html#managing-collections)",
  note_note: "Una descrizione interna ...",
  note_single: "[Ulteriori informazioni] (https://docs.directus.io/guides/collections.html#single)",
  numeric: "Numerico",
  o2m: "Uno a molti (O2M)",
  ok: "OK",
  open_on_gh: "Apri su GitHub",
  operator: "Operatore",
  options: "Opzioni",
  other: "Altro",
  page_not_found: "Pagina non trovata",
  page_not_found_body: "La pagina che stai cercando non sembra esistere.",
  password: "Parola d'ordine",
  password_reset_sent: "Email di reimpostazione della password inviata a {email}",
  permission_states: {
    always: "Sempre",
    create: "Creare",
    full: "Tutti",
    mine: "Solo il mio",
    none: "Nessuna",
    on_create: "Sulla creazione",
    on_update: "In aggiornamento",
    read: "Sola lettura",
    role: "Solo ruolo",
    update: "Aggiornare"
  },
  permissions: "permessi",
  permissions_admin:
    "Gli amministratori hanno accesso a tutti i dati gestiti all'interno del sistema per impostazione predefinita.",
  permissions_no_collections: "Questo progetto non ha ancora raccolte.",
  popular: "Popolare",
  port: "Porta",
  powered_by_directus: "Realizzato da DirectX",
  preview_and_revert: "Anteprima e Ripristina",
  primary_key: "Chiave primaria",
  project: "Progetto",
  project_info: "Informazioni di progetto",
  project_info_copy:
    "Di seguito sono riportate alcune domande sul tuo progetto, incluse le credenziali del tuo primo amministratore.",
  project_key: "Chiave del progetto",
  project_name: "Nome del progetto",
  read: "Leggere",
  readable_fields: "Campi leggibili",
  readable_fields_copy: "Seleziona i campi che l'utente può visualizzare",
  readonly: "Sola lettura",
  regex: "RegEx",
  related_collection: "Collezione correlata",
  related_entries: "Ha voci correlate",
  relation_setup:
    "Poiché questo è un campo relazionale, abbiamo bisogno di mappare i campi correlati.",
  relation_setup_copy:
    "Esistono diversi tipi di dati relazionali, questa interfaccia usa uno chiamato {relation}.",
  relational: "relazionale",
  relationship: "Relazione",
  remove: "Rimuovere",
  remove_related: "Rimuovi l'elemento correlato",
  report_issue: "Segnala problema",
  request_feature: "Richiesta caratteristica",
  required: "necessario",
  reset_password: "Resetta la password",
  reset_preferences: "Ripristina tutte le preferenze dell'elenco",
  revert: "ritornare",
  revert_copy: "Vuoi ripristinare questo elemento come era in data {date}?",
  role_count: "Nessun ruolo | Un ruolo | {count} Ruoli",
  role_settings: "Impostazioni ruolo",
  roles: "Ruoli dell'utente",
  save: "Salvare",
  save_and_add: "Salva e aggiungi nuovo",
  save_and_stay: "Salva e rimani",
  save_as_bookmark: "Salva come segnalibro",
  save_as_copy: "Salva come copia",
  schema: "Schema",
  search: "Ricerca",
  search_interface: "Cerca un'interfaccia ...",
  select_existing: "Seleziona Esistente",
  select_field: "Seleziona un campo",
  select_fields: "Seleziona campi",
  select_from_device: "Seleziona dal dispositivo",
  select_interface_below: "Seleziona un'interfaccia sotto",
  select_statuses: "Seleziona stati",
  select_statuses_copy: "Seleziona gli stati che l'utente può utilizzare",
  server_details: "Dettagli del server",
  server_error: "Errore del server",
  server_error_copy: "C'è qualcosa di sbagliato nel server o nel database di questa istanza.",
  server_trouble: "Problemi del server",
  server_trouble_copy: "Riprovare più tardi o contattare l'aiuto dell'amministratore di sistema.",
  settings: "impostazioni",
  settings_collections_fields: "Collezioni e campi",
  settings_extensions: "estensioni",
  settings_global: "Impostazioni globali",
  settings_permissions: "Ruoli e permessi",
  settings_project: "Impostazioni del progetto",
  show_directus_collections: "Mostra le collezioni del sistema di Directus",
  sign_in: "Registrati",
  sign_out: "Disconnessione",
  sign_out_confirm: "Sei sicuro di voler uscire?",
  sign_out_confirm_edits:
    "Sei sicuro di voler uscire? Tutte le modifiche non salvate andranno perse.",
  signing_in: "Registrarsi",
  something_went_wrong: "Qualcosa è andato storto.",
  something_went_wrong_body:
    "Errore durante l'elaborazione della richiesta. Riprovare dopo aver aggiornato la pagina.",
  statuses: "Stati",
  text: "Testo",
  this_collection: "Questa collezione",
  to: "A",
  unique: "Unico",
  unsaved_changes_copy: "Hai modifiche non salvate! Sei sicuro di voler lasciare questa pagina?",
  update: "Aggiornare",
  update_confirm: "Sei sicuro di voler aggiornare {count} elementi?",
  update_field: "Campo di aggiornamento",
  user_directory: "Elenco utenti",
  user_edit_warning:
    "{first_name} {last_name} sta modificando anche questa voce. Si prega di coordinare con lui in modo da non perdere le modifiche.",
  validation: "Validazione",
  value: "Valore",
  values: "Valori",
  version: "Versione",
  version_and_updates: "Versione e aggiornamenti",
  view_type: "Visualizza come...",
  welcome: "benvenuto",
  weeks: {
    monday: "Lunedi",
    tuesday: "Martedì",
    wednesday: "Mercoledì",
    thursday: "Giovedi",
    friday: "Venerdì",
    saturday: "Sabato",
    sunday: "Domenica"
  },
  writable_fields: "Campi scrivibili",
  writable_fields_copy: "Seleziona i campi che l'utente può modificare",
  yes: "sì"
};
