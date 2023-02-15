import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function UtxoModal({
  setShowBeginSendModal,
  showUtxoModal,
  setShowUtxoModal,
  currentUtxo,
  utxoImage,
  shortenStr,
  SENDS_ENABLED,
}) {
  return (
    <Modal show={showUtxoModal} onHide={() => { setShowUtxoModal(false) }} className="py-5">
      <Modal.Header closeButton className="p-4">
        <Modal.Title>{shortenStr(currentUtxo && `${currentUtxo.txid}:${currentUtxo.vout}`)}:{currentUtxo && currentUtxo.vout}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body p-4">
        <div>
          {currentUtxo && utxoImage(currentUtxo, { width: "60%" })}
        </div>
        <p>
          <b>Utxo:</b> <a href={currentUtxo && ordinalsUrl(currentUtxo)} target="_blank">{currentUtxo && `${currentUtxo.txid}:${currentUtxo.vout}`}</a>
        </p>
        <p>
          <b>Value:</b> {currentUtxo && currentUtxo.value.toLocaleString('en-US')} sats
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setShowUtxoModal(false) }}>
          Cancel
        </Button>
        {SENDS_ENABLED && <Button variant="primary" onClick={() => {
          setShowUtxoModal(false)
          setShowBeginSendModal(true)
        }}> Send </Button>}
      </Modal.Footer>
    </Modal>
  )
}
