import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import * as useConfirmationDialog from './confirmation-dialog.hook'
import { createEmptyLookup, Lookup } from 'common/models';

interface LabelProps {
  closeButton: string;
  acceptButton: string;
}

export interface Props {
  item:Lookup;
  title: string | React.ReactNode;
  labels: LabelProps;
}

export const ConfirmationDialogComponent: React.FunctionComponent<Props> = props => {
  const {title, labels, children ,item } = props;
  
  const {isOpen,onAccept, onClose, onOpenDialog} = useConfirmationDialog.useConfirmationDialog();
  
  React.useEffect(() => {
    onOpenDialog (item);
  }, []);

  const handleAccept = () => {
    onAccept();
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle data-testid="idDiagTitle">{title}</DialogTitle>
      <DialogContent data-testid="idDiagContent">{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained" data-testid="idCloseButton">
          {labels.closeButton}
        </Button>
        <Button onClick={handleAccept} color="primary" variant="contained" data-testid="idAccepButton">
          {labels.acceptButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
