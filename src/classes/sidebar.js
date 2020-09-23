import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './blocks'

export class Sidebar {
    constructor(selector, update){
        this.$el = document.querySelector(selector)
        this.update = update
        this.init()
    }

    init(){
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

    get template() {
        return [
            block('text'),
            block('title'),
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const Constructor = type === 'text' ? TextBlock : TitleBlock

        const newBlock = new Constructor(value, {styles})
        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}

function block(type) {
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input name="value" placeholder="value" class="form-control form-control-sm">
        </div>
        <div class="form-group">
            <input name="styles" placeholder="styles" class="form-control form-control-sm">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Create</button>
    </form>
    <hr>
    `
}