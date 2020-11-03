import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchPin = pinId => dispatch => {
  return PinAPIUtil.fetchPin(pinId)
  .then(pin => dispatch(receivePin(pin)))
}

export const fetchPins = () => dispatch => {
  return PinAPIUtil.fetchPins()
    .then(pins => dispatch(receivePins(pins)))
}

export const deletePin = (pinId) => dispatch => {
  return PinAPIUtil.deletePin(pinId)
    .then(pin => dispatch(removePin(pin.id)))
}

export const updatePin = (pin) => dispatch => {
  return PinAPIUtil.updatePin(pin)
    .then(pin => dispatch(receivePin(pin)))
}

export const createPin = (pin) => dispatch => (
  PinAPIUtil.createPin(pin).then(pin => (
    dispatch(receivePin(pin)) 
    ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);