import { Alert, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function errorModal({ text }) {

    return (
        <Modal open={true} onClose={false}>
            <Alert severity="error">
                {text}
            </Alert>
        </Modal>
    )
}