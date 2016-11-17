export const REQUEST_AIRPORTS = 'request airports';
export const RECEIVE_AIRPORTS = 'receive airports';
export const CHOOSE_AIRPORT = 'choose airport';
export const REQUEST_TICKETS = 'request tickets';
export const RECEIVE_TICKETS = 'receive tickets';


/*
You may use a dedicated status field in your actions:
{ type: 'REQUEST_TICKETS' }
{ type: 'REQUEST_TICKETS', status: 'error', error: 'Oops' }
{ type: 'REQUEST_TICKETS', status: 'success', response: { ... } }

Or you can define separate types for them:
{ type: 'REQUEST_TICKETS_REQUEST' }
{ type: 'REQUEST_TICKETS_FAILURE', error: 'Oops' }
{ type: 'REQUEST_TICKETS_SUCCESS', response: { ... } }
*/