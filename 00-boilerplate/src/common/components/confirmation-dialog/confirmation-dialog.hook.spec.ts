
import {act} from 'react-test-renderer'
import {renderHook} from '@testing-library/react-hooks'
import {useConfirmationDialog} from './confirmation-dialog.hook'

describe('dialog spec',()=>{
  afterEach(()=>{
    jest.restoreAllMocks()
  })
    it('Set with desfault values',()=>{
             
        const { result } = renderHook(() => useConfirmationDialog());
       
        expect(result.current.isOpen).toEqual(false)
        expect(result.current.itemToDelete).toEqual({
            id: '',
            name: '',
          })
        expect(result.current.setIsOpen).toEqual(expect.any(Function))
        expect(result.current.setItemToDelete).toEqual(expect.any(Function))
    })

    it('Updating values',()=>{

        const openDialog = true
        const newItem = {
            id: 'a',
            name: 'a',
          }
             
        const { result } = renderHook(() => useConfirmationDialog());
       
        act(() => {
            result.current.setIsOpen(openDialog)
        });
        expect(result.current.isOpen).toEqual(true)

        act(() => {
            result.current.setItemToDelete(newItem)
        });
        expect(result.current.itemToDelete).toEqual({
            id: 'a',
            name: 'a',
          })
    })

    it('On Accept should call Item to delete with empty',()=>{
     
        const { result } = renderHook(() => useConfirmationDialog());
       
        act(() => {
            result.current.onAccept
        });
        expect(result.current.itemToDelete).toEqual({
            id: '',
            name: '',
          })
    })

    it('On close should set isOpen to false',()=>{
     
        const { result } = renderHook(() => useConfirmationDialog());
       
        act(() => {
            result.current.onClose
        });
        expect(result.current.isOpen).toEqual(false)
    })

    it('On onOpenDialog should set isOpen to true and set item with input values',()=>{
     
        const newItem = {
            id: 'new',
            name: 'new',
          }

        const { result } = renderHook(() => useConfirmationDialog());
       
        act(() => {
            result.current.onOpenDialog(newItem)
        });
        expect(result.current.isOpen).toEqual(true)
        expect(result.current.itemToDelete).toEqual({
            id: 'new',
            name: 'new',
          })

    })

})


