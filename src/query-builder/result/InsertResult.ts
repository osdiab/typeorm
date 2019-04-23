import {ObjectLiteral} from "../../common/ObjectLiteral"    

/**
 * Result object returned by InsertQueryBuilder execution.
 */
export class InsertResult<Entity extends ObjectLiteral> {

    /**
     * Contains inserted entity id.
     * Has entity-like structure (not just column database name and values).
     */
    identifiers: Entity[] = [];

    /**
     * Generated values returned by a database.
     * Has entity-like structure (not just column database name and values).
     */
    generatedMaps: Entity[] = [];

    /**
     * Raw SQL result returned by executed query.
     */
    raw: any;

}
