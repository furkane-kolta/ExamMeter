/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    const id = params.id;

    return { id };
}