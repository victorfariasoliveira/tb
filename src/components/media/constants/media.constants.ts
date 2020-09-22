export default {
  badRequest: { status: 400, message: 'There was an error in your request, please try again.' },
  badRequestDelete: {
    status: 400,
    message:
      'There was an error in your request, and it was not possible to delete the requested item. Please try again.',
  },
  badRequestUpdate: {
    status: 400,
    message:
      'There was an error in your request, and we were unable to update the requested item. Please try again.',
  },
  badRequestGet: {
    status: 400,
    message:
      'There was an error in your request, and the item you requested could not be found. Please try again.',
  },
  badRequestCreate: {
    status: 400,
    message:
      'There was an error in your request, and the requested item could not be created. Please try again.',
  },
}
