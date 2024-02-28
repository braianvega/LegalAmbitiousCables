---
layout: components
title: Data-table
description: Data table is a powerful component  for creating  table listings and adding interactions to them. It provides sorting by data-type  without any configuration which allow user to quickly read, compare and take action on data.
section: Components
bootstrapRef: https://getbootstrap.com/docs/5.1/components/tables/
menuSlug: data-table
---

<div class="display-5 pt-md-8 pb-1">
Data table example</div>
  <p class="text-justify pe-md-8 pe-lg-11 pb-3">
    In addition to sorting the table elements, this version of  datatable  truncates the text when it is longer than the colum and show the full text in a tooltip on  hover.
  </p>
  <div class="ax-example p-md-3 border">
<table id="data-table-example" class="table dt-responsive nowrap"  style="width:100%">
        <thead>
            <tr  class = "header-row ">
                <th class = "header-cell" style="width: 120px">   
                <input id="table-select-rows" type="checkbox" class="form-check-input"/>
                <span class = "ms-1" >
                    Select 
                </span>
                <span 
                class= "sort-icon data-table-sort-low-icon"
                name="data-table-sort-icon"
                index=0
                >
                </span>
                </th>
                <th class = "header-cell"  style="width: 120px">
                <span>
                    Number
                </span>
                <span 
                class= "sort-icon data-table-sort-low-icon"
                name="data-table-sort-icon"
                index=1
                >
                </th>
                <th class = "header-cell"  style="width: 120px">Text</th>
                <th class = "header-cell"  style="width: 100px">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr  class="table-row" >
                <td> 
                <input type="checkbox"
                name ="data-table-checkbox"
                class="form-check-input"/>
                <span class = "ms-1" >
                data1
                </span>
                </td>
                <td class="table-number-cell">0</td>
                <td>Text0</td>
                <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
            <tr  class="table-row">
                <td> 
                <input type="checkbox" 
                name ="data-table-checkbox"
                class="form-check-input"/>
                 <span class = "ms-1" >
                data2
                </span>
                </td>
                <td class="table-number-cell">1</td>
                <td> 
                <span class="d-inline-block text-truncate"
                    style="max-width: 100px;"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Text that is longer than the column width is truncated. On hover, a tooltip shows the full text.">
                Text that is longer than the column width is truncated. On hover, a tooltip shows the full text.
                </span>
            </td>
                 <td> 
                 <svg  class="action-icon valign-btn-icon me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
            <tr  class="table-row">
                <td> <input type="checkbox"  
                 name ="data-table-checkbox"
                 class="form-check-input"/>
                 <span class = "ms-1" >
                data3
                </span>
                </td>
                <td class="table-number-cell">2</td>
                 <td>Text</td>
              <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
            <tr  class="table-row">
                <td> 
                <input type="checkbox"       
                        name ="data-table-checkbox"
                        class="form-check-input"/>
                 <span class = "ms-1" >
                data4
                </span>
                </td>
                <td class="table-number-cell">3</td>
                <td>Text</td>
             <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
               <tr  class="table-row">
                <td> <input type="checkbox"     
                            name ="data-table-checkbox"
                            class="form-check-input"/>
                 <span class = "ms-1" >
                data5
                </span>
                </td>
                <td class="table-number-cell">4</td>
                <td>Text</td>
             <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
   
  <div class="pb-4">
   
  ```html 
<table id="data-table-example" class="table dt-responsive nowrap"  style="width:100%">
        <thead>
            <tr  class = "header-row ">
                <th  style="width: 120px">   
                <input id="table-select-rows" type="checkbox" class="form-check-input"/>
                <span class = "ms-1" >
                    Select 
                </span>
                <span 
                class= "sort-icon data-table-sort-low-icon"
                name="data-table-sort-icon"
                index=0
                >
                </span>
                </th>
                <th  style="width: 120px">
                <span>
                    Number
                </span>
                <span 
                class= "sort-icon data-table-sort-low-icon"
                name="data-table-sort-icon"
                index=1
                >
                </th>
                <th  style="width: 120px">Text</th>
                <th  style="width: 100px">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr  class="table-row">
                <td> 
                <input type="checkbox"
                name ="data-table-checkbox"
                class="form-check-input"/>
                <span class = "ms-1" >
                data1
                </span>
                </td>
                <td class="table-number-cell">0</td>
                <td>Text</td>
                <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
            <tr  class="table-row">
                <td> 
                <input type="checkbox" 
                name ="data-table-checkbox"
                class="form-check-input"/>
                 <span class = "ms-1" >
                data2
                </span>
                </td>
                <td class="table-number-cell">1</td>
                <td> 
                <span class="d-inline-block text-truncate"
                    style="max-width: 100px;"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Text that is longer than the column width is truncated. On hover, a tooltip shows the full text.">
                Text that is longer than the column width is truncated. On hover, a tooltip shows the full text.
                </span>
            </td>
                 <td> 
                 <svg  class="action-icon valign-btn-icon me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
            <tr  class="table-row">
                <td> <input type="checkbox"  
                 name ="data-table-checkbox"
                 class="form-check-input"/>
                 <span class = "ms-1" >
                data3
                </span>
                </td>
                <td class="table-number-cell">2</td>
                 <td>Text</td>
              <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
            <tr  class="table-row">
                <td> 
                <input type="checkbox"       
                        name ="data-table-checkbox"
                        class="form-check-input"/>
                 <span class = "ms-1" >
                data4
                </span>
                </td>
                <td class="table-number-cell">3</td>
                <td>Text</td>
             <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
               <tr  class="table-row">
                <td> <input type="checkbox"     
                            name ="data-table-checkbox"
                            class="form-check-input"/>
                 <span class = "ms-1" >
                data5
                </span>
                </td>
                <td class="table-number-cell">4</td>
                <td>Text</td>
             <td> 
                 <svg  class="action-icon valign-btn-icon me-1"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#00008F"/></svg>
                 <svg width="18" height="20" viewBox="0 0 18 20" fill="none" 
                 class="action-icon valign-btn-icon me-1" xmlns="http://www.w3.org/2000/svg"><path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#00008F"/></svg>
                </td>
            </tr>
        </tbody>
    </table>
  ```
  </div>