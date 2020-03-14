export function toPage(path) {
    return ()=> window.location.href = window.location.origin.concat('/#',path);
}