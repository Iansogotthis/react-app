export default function NewSkillForm() {
    return (
        <>
            <div>
                <form>
                    <label htmlFor="skill">
                        Skill:
                        <input type="input" label="skill" name="skill" />
                    </label>

                    <label className="Level">Level:</label>
                    <select name="grasp">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button type="submit">Add Skill</button>
                </form>
            </div>
        </>
    );
}