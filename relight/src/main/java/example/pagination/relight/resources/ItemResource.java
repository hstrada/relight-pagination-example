package example.pagination.relight.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import example.pagination.relight.entities.Item;
import example.pagination.relight.services.ItemService;

@RestController
@RequestMapping("/items")
public class ItemResource {

	@Autowired
	private ItemService itemService;

	@GetMapping
	List<Item> loadCharactersPage(Pageable pageable) {
		return itemService.getItemsList(pageable.getPageNumber(), pageable.getPageSize());
	}

}
