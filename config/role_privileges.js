module.exports = {
    privGroups : [
         {
            id:"USERS",
            name:"User Permissions",
         },
         {
            id:"ROLES",
            name:"Role Permissions",
         },
         {
            id:"CATEGORIES",
            name:"Category Permissions",
         },
         {
            id:"AUDITLOGS",
            name:"AuditLogs Permissions",
         }
    ],
    privileges : [
        {
            key:"user_view",
            name:"User View",
            group:"Users",
            description:"User View"
        },
        {
            key:"user_add",
            name:"User Add",
            group:"Users",
            description:"User Add"
        },
        {
            key:"user_update",
            name:"User Update",
            group:"Users",
            description:"User Update"
        },
        {
            key:"user_delete",
            name:"User Delete",
            group:"Users",
            description:"User Delete"
        },
        {
            key:"role_view",
            name:"Role View",
            group:"Roles",
            description:"Role View"
        },
        {
            key:"role_add",
            name:"Role Add",
            group:"Roles",
            description:"Role Add"
        },
        {
            key:"role_update",
            name:"Role Update",
            group:"Roles",
            description:"Role Update"
        },
        {
            key:"role_delete",
            name:"Role Delete",
            group:"Roles",
            description:"Role Delete"
        },
        {
            key:"category_view",
            name:"Category View",
            group:"Categories",
            description:"Category View"
        },
        {
            key:"category_add",
            name:"Category Add",
            group:"Categories",
            description:"Category Add"
        },
        {
            key:"category_update",
            name:"Category Update",
            group:"Categories",
            description:"Category Update"
        },
        {
            key:"category_delete",
            name:"Category Delete",
            group:"Categories",
            description:"Category Delete"
        },
        {
            key:"auditlogs_view",
            name:"AuditLogs View",
            group:"AuditLogs",
            description:"AuditLogs View"
        },
        {
            key:"auditlogs_add",
            name:"AuditLogs Add",
            group:"AuditLogs",
            description:"AuditLogs Add"
        },
        {
            key:"auditlogs_update",
            name:"AuditLogs Update",
            group:"AuditLogs",
            description:"AuditLogs Update"
        },
        {
            key:"auditlogs_delete",
            name:"AuditLogs Delete",
            group:"AuditLogs",
            description:"AuditLogs Delete"
        }
    ]
}