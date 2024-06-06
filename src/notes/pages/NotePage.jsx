import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { NoteLayout } from '../layout/NoteLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/note/thunks';

export const NotePage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.note );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <NoteLayout>
      
      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }


      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </NoteLayout>
  )
}
