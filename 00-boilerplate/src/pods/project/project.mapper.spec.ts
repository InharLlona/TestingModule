import * as viewModel from './project.vm';
import * as mapper from './project.mapper'
import * as apiModel from './api/project.api-model';


//const viewModel = require ('./project.vm')
describe('mapper spec',()=>{
    it('if undefined project should gen empty project',()=>{
        //Arrange
        const pr: apiModel.Project = undefined;
        const createEmptyProject = jest.spyOn(viewModel,'createEmptyProject')
        
        //Act
        const creating = mapper.mapProjectFromApiToVm(pr)
        //Assert
        
        expect(createEmptyProject).toHaveBeenCalled()
    })

    it('if null project should gen empty project',()=>{
        //Arrange
        const pr: apiModel.Project = null;
        const createEmptyProject = jest.spyOn(viewModel,'createEmptyProject')
        
        //Act
        const creating = mapper.mapProjectFromApiToVm(pr)
        //Assert
        
        expect(createEmptyProject).toHaveBeenCalled()
    })

    it('If getting a project shuld call mapping',()=>{
        //Arrange
        const pr: apiModel.Project = {
            id: "a",
            name: "a",
            externalId: "a",
            comments: "a",
            isActive: true,
            employees: [{
                id: "a",
                isAssigned: false,
                employeeName: "a"
              }]
          }
          const mappingEmp = jest.spyOn(mapper,'mapEmployeeSummaryListFromApiToVm')
        //Act
        const creating = mapper.mapProjectFromApiToVm(pr)
        //Assert
        
        expect(mappingEmp).toBeCalled()
    })

    it('Sould get api model and return view model',()=>{
        //Arrange
        const pr: apiModel.Project = {
            id: "a",
            name: "a",
            externalId: "a",
            comments: "a",
            isActive: true,
            employees: [{
                id: "a",
                isAssigned: false,
                employeeName: "a"
              }]
          }
          const mappingEmp = jest.spyOn(mapper,'mapEmployeeSummaryListFromApiToVm')
        //Act
        const creating = mapper.mapProjectFromApiToVm(pr)
        //Assert
        
        expect(creating).toEqual({
            id: "a",
            name: "a",
            externalId: "a",
            comments: "a",
            isActive: true,
            employees: [{
                id: "a",
                isAssigned: false,
                employeeName: "a"
              }]
          })
    })
})