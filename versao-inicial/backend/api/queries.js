module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
        UNION ALL
        SELECT c.id FROM subcategories, categories c
            WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `
}