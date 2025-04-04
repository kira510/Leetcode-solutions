/**
 * https://leetcode.com/problems/employee-importance/description/
 * 
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 * 
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const empMap = new Map();

    employees.forEach(emp => {
        empMap.set(emp[0], emp);
    })

    function dfs(emp) {
        let importance = emp[1];

        for(const subordinateId of emp[2]) {
            importance += dfs(empMap.get(subordinateId))
        }

        return importance;
    }

    return dfs(empMap.get(id));
};


