
import * as confirmDiag from './confirmation-dialog.component'
import React from 'react'
import {render, screen} from '@testing-library/react'
import userevent from '@testing-library/user-event'
import * as useConfirmationDialog from './confirmation-dialog.hook'

describe('dialog spec',()=>{
  afterEach(()=>{
    jest.restoreAllMocks()
  })
    it('is isOpenTitle, content and 2 buttons SHOULD be displayed',()=>{
       const funcProps = {
            item:{
                 id: 'a',
                 name: 'a',
                },
            title: "It is OK",
            labels:{
                closeButton: "CLOSE",
                acceptButton: "ACCEPT"
              }
          }
          const stub1 = jest.spyOn(useConfirmationDialog, 'useConfirmationDialog').mockReturnValueOnce({
            isOpen:true,
            setIsOpen: () => {},
            itemToDelete:{
              id: '',
              name: '',
            },
            setItemToDelete:()=>{},
            onAccept: () => {},
            onClose: () => {},
            onOpenDialog: () => {},
          })
         
          const {getByRole} = render(<confirmDiag.ConfirmationDialogComponent item={funcProps.item} title={funcProps.title} labels={funcProps.labels}/>)
    
          const elementDiag = getByRole('dialog')
          const elementDiagTitle = screen.getByTestId('idDiagTitle')
          const elementDiagContent = screen.getByTestId('idDiagContent')
          const elementDiagCloseBut = getByRole('button',{name:"CLOSE"})
          const elementDiagAcceptBut = getByRole('button',{name:"ACCEPT"})

          expect(elementDiag).not.toBeNull()
          expect(elementDiagTitle).toBeInTheDocument()
          expect(elementDiagContent).toBeInTheDocument()
          expect(elementDiagCloseBut).toBeInTheDocument()
          expect(elementDiagAcceptBut ).toBeInTheDocument()
        })

        it('is not open Title, content and 2 buttons SHOULDENT be displayed',()=>{
          const funcProps = {
               item:{
                    id: '',
                    name: '',
                   },
               title: "It is OK",
               labels:{
                   closeButton: "CLOSE",
                   acceptButton: "ACCEPT"
                 }
             }
             const stubx = jest.spyOn(useConfirmationDialog, 'useConfirmationDialog').mockReturnValueOnce({
               isOpen:false,
               setIsOpen: () => {},
               itemToDelete:{
                 id: '',
                 name: '',
               },
               setItemToDelete:()=>{},
               onAccept: () => {},
               onClose: () => {},
               onOpenDialog: () => {},
             })
        
             const {getByRole} = render(<confirmDiag.ConfirmationDialogComponent item={funcProps.item} title={funcProps.title} labels={funcProps.labels}/>)
       
             const elementDiag = screen.queryByRole('dialog')
             const elementDiagTitle = screen.queryByTestId('idDiagTitle')
             const elementDiagContent = screen.queryByTestId('idDiagContent')
             const elementDiagCloseBut = screen.queryByRole('button',{name:"CLOSE"})
             const elementDiagAcceptBut = screen.queryByRole('button',{name:"ACCEPT"})
   
             expect(elementDiag).not.toBeInTheDocument()
             expect(elementDiagTitle).not.toBeInTheDocument()
             expect(elementDiagContent).not.toBeInTheDocument()
             expect(elementDiagCloseBut).not.toBeInTheDocument()
             expect(elementDiagAcceptBut ).not.toBeInTheDocument()
           })

           it('clicking close, content and 2 buttons SHOULDENT be displayed',()=>{
             const funcProps = {
              item:{
                id: '',
                name: '',
              },
              title: "It is OK",
              labels:{
                     closeButton: "CLOSE",
                     acceptButton: "ACCEPT"
                   }
               }
             const stubx = jest.spyOn(useConfirmationDialog, 'useConfirmationDialog').mockReturnValueOnce({
                 isOpen:false,
                 setIsOpen: () => {},
                 itemToDelete:{
                   id: '',
                   name: '',
                 },
                 setItemToDelete:()=>{},
                 onAccept: () => {},
                 onClose: () => {},
                 onOpenDialog: () => {},
               })
          
             const {getByRole} = render(<confirmDiag.ConfirmationDialogComponent item={funcProps.item} title={funcProps.title} labels={funcProps.labels}/>)
         
             const elementDiag = screen.queryByRole('dialog')
             const elementDiagTitle = screen.queryByTestId('idDiagTitle')
             const elementDiagContent = screen.queryByTestId('idDiagContent')
             const elementDiagCloseBut = screen.queryByRole('button',{name:"CLOSE"})
             const elementDiagAcceptBut = screen.queryByRole('button',{name:"ACCEPT"})
              
             userevent.click(elementDiagCloseBut)

             expect(elementDiag).not.toBeInTheDocument()
             expect(elementDiagTitle).not.toBeInTheDocument()
             expect(elementDiagContent).not.toBeInTheDocument()
             expect(elementDiagCloseBut).not.toBeInTheDocument()
             expect(elementDiagAcceptBut ).not.toBeInTheDocument()
             
             })
             it('clicking accept, should delete Lookup',()=>{
                const funcProps = {
                  item:{
                    id: '',
                    name: '',
                  },
                  title: "It is OK",
                  labels:{
                    closeButton: "CLOSE",
                    acceptButton: "ACCEPT"
                  }
                }
                const stubx = jest.spyOn(useConfirmationDialog, 'useConfirmationDialog').mockReturnValueOnce({
                  isOpen:false,
                  setIsOpen: () => {},
                  itemToDelete:{
                    id: '',
                    name: '',
                  },
                  setItemToDelete:()=>{},
                  onAccept: () => {},
                  onClose: () => {},
                  onOpenDialog: () => {},
                })
            
               const component = render(<confirmDiag.ConfirmationDialogComponent item={funcProps.item} title={funcProps.title} labels={funcProps.labels}/>)
           
               const elementDiag = screen.queryByRole('dialog')
               const elementDiagTitle = screen.queryByTestId('idDiagTitle')
               const elementDiagContent = screen.queryByTestId('idDiagContent')
               const elementDiagCloseBut = screen.queryByRole('button',{name:"CLOSE"})
               const elementDiagAcceptBut = screen.queryByRole('button',{name:"ACCEPT"})
                
               userevent.click(elementDiagAcceptBut)
  
               expect(elementDiag).not.toBeInTheDocument()
               expect(elementDiagTitle).not.toBeInTheDocument()
               expect(elementDiagContent).not.toBeInTheDocument()
               expect(elementDiagCloseBut).not.toBeInTheDocument()
               expect(elementDiagAcceptBut ).toBeInTheDocument() 
                     
            })
})


